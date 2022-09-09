require 'faker'

puts "🌱 Seeding spices..."

10.times do 
    Pet.create(
        name: Faker::Creature::Cat.name,
        pet_type: 'cat',
        breed: Faker::Creature::Cat.breed,
        dob: "#{rand(1..12)}/#{rand(1..28)}/#{rand(2009..2021)}/",
        image_url: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg")
    )
end

5.times do
    Owner.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: "#{Faker::Camera.brand}@yahoo.com"
    )
end

puts "✅ Done seeding!"
