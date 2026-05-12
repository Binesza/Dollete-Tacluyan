<?php

namespace Database\Seeders;

use App\Models\Gender;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Gender::create(['gender' => 'Male']);
        Gender::create(['gender' => 'Female']);
        Gender::create(['gender' => 'Prefer Not to Say']);

        $birthDate = fake()->date();
        $age = date_diff(date_create($birthDate), date_create('now'))->y;

        User::create([
            'first_name' => 'Viness',
            'middle_name' => 'Judillasen',
            'last_name' => 'Tacluyan',
            'suffix_name' => null,
            'gender_id' => 1,
            'birth_date' => $birthDate,
            'age' => $age,
            'username' => 'vinesss',
            'password' => Hash::make('viness12'),
        ]);

        User::factory(10)->create();
    }
}
