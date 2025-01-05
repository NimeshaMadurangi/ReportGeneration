<?php

namespace App\Http\Controllers;

use App\Models\Lottery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class LotteryController extends Controller
{
    // Path for storing XML files
    const XML_STORAGE_PATH = 'xml_files';

    // Upload XML files and save lottery data.

    public function upload(Request $request)
    {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'required|file|mimes:xml|max:2048',
        ]);

        $lotteriesData = [];

        foreach ($request->file('files') as $file) {
            try {
                $path = $file->store(self::XML_STORAGE_PATH);
                $xml = @simplexml_load_file(Storage::path($path));

                if ($xml === false) {
                    throw new \Exception("Invalid XML format in file: {$file->getClientOriginalName()}");
                }

                $data = json_decode(json_encode($xml), true);

                // Extract and validate required data
                $lotteriesData[] = $this->prepareLotteryData($data, $file->getClientOriginalName());
            } catch (\Exception $e) {
                Log::error("Error processing file {$file->getClientOriginalName()}: " . $e->getMessage());
                continue;
            }
        }

        if (!empty($lotteriesData)) {
            Lottery::insert($lotteriesData);
        }

        return redirect()->route('report')->with('success', 'Files uploaded and processed successfully.');
    }

    // Fetch all lotteries for the report page.

    public function report()
    {
        $lotteries = Lottery::orderBy('date', 'desc')->get();

        return inertia('Report', ['lotteries' => $lotteries]);
    }

    // Fetch lotteries by name.
    
    public function fetchByName(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $lotteries = Lottery::where('name', $request->name)->orderBy('date', 'desc')->get();

        return response()->json($lotteries);
    }

    //  Prepare lottery data for database insertion.

    private function prepareLotteryData(array $data, string $fileName)
    {
        if (!isset($data['number'])) {
            throw new \Exception("Missing required 'number' field in file: {$fileName}");
        }

        $balls = isset($data['balls']['ball']) ? (array) $data['balls']['ball'] : [];
        $nextSuper = isset($data['next']['super']) ? (float) str_replace(',', '', $data['next']['super']) : null;

        return [
            'name' => $data['name'] ?? 'LAGNA WASANAWA',
            'number' => $data['number'],
            'date' => $data['date'] ?? null,
            'color' => $data['color'] ?? null,
            'next_date' => $data['next']['date'] ?? null,
            'next_super' => $nextSuper ? number_format($nextSuper * 0.91, 2, '.', '') : null,
            'ball1' => $balls[0] ?? null,
            'ball2' => $balls[1] ?? null,
            'ball3' => $balls[2] ?? null,
            'ball4' => $balls[3] ?? null,
            'ball5' => $balls[4] ?? null,
            'ball6' => $balls[5] ?? null,
            'ball7' => $balls[6] ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    public function getLottery(Request $request)
    {
        $lottery = Lottery::where('name', $request->name)->latest()->first();

        if (!$lottery) {
            return response()->json(['message' => 'Lottery not found'], 404);
        }

        return response()->json($lottery);
    }
}
