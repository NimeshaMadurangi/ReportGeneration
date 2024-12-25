<?php

namespace App\Http\Controllers;

use App\Models\Lottery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LotteryController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the uploaded files
        $request->validate([
            'files' => 'required|array', // Ensure 'files' key is an array
            'files.*' => 'required|file|mimes:xml|max:2048', // Validate each XML file
        ]);

        // Process each uploaded file
        foreach ($request->file('files') as $file) {
            // Store and parse the XML file
            $path = $file->store('xml_files');
            $xml = simplexml_load_file(Storage::path($path));
            $data = json_decode(json_encode($xml), true);

            // Extract relevant data from XML
            $balls = isset($data['balls']['ball']) ? (array) $data['balls']['ball'] : []; // Extract balls data
            $nextSuper = isset($data['next']['super']) ? (float) str_replace(',', '', $data['next']['super']) : null; // Convert to float and remove commas
            $nextDate = isset($data['next']['date']) ? (string) $data['next']['date'] : null; // Convert to string

            // Convert the 'date' field from the XML (ensure it's a valid datetime format)
            $date = isset($data['date']) ? (string) $data['date'] : null;

            // Save data into the database
            Lottery::create([
                'name' => $data['name'],
                'number' => $data['number'],  
                'date' => $date,  // Save the full date with time
                'color' => $data['color'] ?? null,  
                'next_date' => $nextDate,  // Save next draw date
                'next_super' => $nextSuper ? number_format($nextSuper * 0.91, 2, '.', '') : null, // Apply 9% reduction
                'ball1' => $balls[0] ?? null,  
                'ball2' => $balls[1] ?? null,  
                'ball3' => $balls[2] ?? null,  
                'ball4' => $balls[3] ?? null,  
                'ball5' => $balls[4] ?? null,  
                'ball6' => $balls[5] ?? null,  
                'ball7' => $balls[6] ?? null,  // Assuming there are 7 balls as per your example
            ]);
        }

        // Redirect to the report page after processing
        return redirect()->route('report');
    }

    public function report()
    {
        // Retrieve all lotteries from the database
        $lotteries = Lottery::all();

        // Pass data to the frontend via Inertia
        return inertia('Report', ['lotteries' => $lotteries]);
    }
}
