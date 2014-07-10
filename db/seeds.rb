# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(user_name: 'Biff', email: 'biff@biff.com', password_digest: 'ljfalfjkj2fa2lkdfj1s', remember_token: 'adkl3jfdlkfjdfadf3')
User.create(user_name: 'Spiff', email: 'spiff@spiff.com', password_digest: 'ljfdafddkj2fa2lkdfj1s', remember_token: 'adkl3jfdld3ufedfadf3')
User.create(user_name: 'Biff', email: 'cliff@cliff.com', password_digest: 'ljfalferea334a2lkdfj1s', remember_token: 'adk3aji9fdlkfjdfadf3')

Exercise.create(ex_name: 'Leg Lifts', two_sides?: true, reps: 5, holdtime: 10, img_url: 'http://anatomyofacinnamongirl.files.wordpress.com/2009/11/dog-peeing1.jpg', user_id: 1 )
Exercise.create(ex_name: 'Clam Shells', two_sides?: true, reps: 5,  holdtime: 10, img_url: 'http://rlv.zcache.com/clam_shell_cute_cartoon_caricature_stickers-r55b675c3f5dc4a71bac10cf1a4f7fbf6_v9waf_8byvr_512.jpg', user_id: 2 )
Exercise.create(ex_name: 'Dead Bug', two_sides?: true, reps: 20, holdtime: 5, img_url: 'http://home1.org/wp-content/uploads/2013/03/dead-mosquito-cartoon.jpg', user_id: 3 )

Workout.create(user_id: 1, exercise_id: 1, completed?: false, created_at: Time.now, updated_at: Time.now)
Workout.create(user_id: 2, exercise_id: 3, completed?: true, created_at: Time.now, updated_at: Time.now)
Workout.create(user_id: 3, exercise_id: 2, completed?: true, created_at: Time.now, updated_at: Time.now)
