select * from posts
join users on users.id = posts.poster_id
where poster_id <> ${id}
order by posts.id asc;