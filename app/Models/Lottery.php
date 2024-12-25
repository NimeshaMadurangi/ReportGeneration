<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lottery extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'name', 
        'number', 
        'date', 
        'color',
        'next_super', 
        'ball1', 
        'ball2', 
        'ball3', 
        'ball4', 
        'ball5', 
        'ball6'
    ];

}
