select * from posts
join users on users.id = posts.poster_id
order by posts.id asc;