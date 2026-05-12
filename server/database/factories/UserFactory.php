<?php

namespace Database\Factories;

use App\Models\Gender;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    public function definition(): array
    {
        $birthDate = fake()->date();
        $age = date_diff(date_create($birthDate), date_create('now'))->y;

        $gender = Gender::inRandomOrder()->first();

        return [
            'first_name' => fake()->firstName(),
            'middle_name' => fake()->lastName(),
            'last_name' => fake()->lastName(),
            'suffix_name' => fake()->suffix(),
            'gender_id' => $gender?->gender_id ?? 1,
            'birth_date' => $birthDate,
            'age' => $age,
            'username' => strtolower(fake()->firstName() . fake()->lastName()),
            'password' => Hash::make('password123'),
        ];
    }
}
