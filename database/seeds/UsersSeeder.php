<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'markos494@gmail.com',
            'password' => '$2y$10$BbJfvgmHIxNLbEmouO5fpee1EyIlBQ1a0GZJppasnHA7mkmoJONr6',
            'auth_token' => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHBzOi8vYmFyYmFtcy5zaXRlL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTUyNDI2MDQwLCJleHAiOjE1NTI0Mjk2NDAsIm5iZiI6MTU1MjQyNjA0MCwianRpIjoiV0hOQTY0SkxDTTNWYms5ayJ9.Hce1LsqW-a0hECRQC4Q1rSHbS1eW5NfoZZwCXwZGPLE'
        ]);
    }
}
