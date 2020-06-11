SELECT 
    posts.id,
    posts.author_id,
    posts.title,
    posts.content,
    posts.img,
    users.username,
    users.profile_pic
FROM
    posts JOIN users ON users.id = posts.author_id
WHERE 
posts.id = $1;