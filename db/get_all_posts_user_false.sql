SELECT 
    p.title,
    p.author_id,
    p.id,
    u.username,
    u.profile_pic
FROM
    posts p JOIN users u ON u.id = p.author_id
WHERE  
    p.title LIKE '%' || $1 || '%'
AND p.author_id != $2
ORDER BY
    p.id DESC;