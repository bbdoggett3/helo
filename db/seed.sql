CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
);

--Per the instructions I needed to ALTER the password from VARCAHR(20) to TEXT
ALTER TABLE users
ALTER password
TYPE TEXT;

--Dummy data USERS
INSERT INTO users(username, password, profile_pic)
VALUES
('bbdog', 'ben', 'https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160')

--Dummy data POSTS
INSERT INTO posts(title, img, content)
VALUES
('Day of Coding', 'https://lh3.googleusercontent.com/proxy/L5koI5ayYaZKbJJmaccyfD8E2L952rIK-7fyqtPOEzigLFEmrcmIy8uUVQP764__byIsuRvPA7x1UiDrBj8Q3t8J9L6BybP93oN56ziRH2K1ZExCMPhikXQ2j8HgnCks9HmgMe2edT0HJVjvkzBmjbCs3ZJ6IYSJ08YiPyIuERNQ', 'It has been a great day for programming if you ask me!')