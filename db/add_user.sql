insert into users (name, password, profile_pic)
values (${name},${password}, 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?cs=srgb&dl=animal-pet-cute-126407.jpg&fm=jpg')
RETURNING *;