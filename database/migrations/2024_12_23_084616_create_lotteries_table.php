<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lotteries', function (Blueprint $table) {
            $table->id();
            $table->string('name');              // Lottery name
            $table->integer('number');           // Draw number
            $table->timestamp('date');           // Lottery date
            $table->string('color')->nullable(); // Color of the lottery
            $table->decimal('next_super', 15, 2); // Next super jackpot
            $table->string('ball1')->nullable(); // Ball 1 (English Number or Lagna)
            $table->string('ball2')->nullable(); // Ball 2
            $table->string('ball3')->nullable(); // Ball 3
            $table->string('ball4')->nullable(); // Ball 4
            $table->string('ball5')->nullable(); // Ball 5
            $table->string('ball6')->nullable(); // Ball 6
            $table->timestamps();
        });
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lotteries');
    }
};