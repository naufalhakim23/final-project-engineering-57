package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "../raihmimpimu.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id integer not null primary key AUTOINCREMENT UNIQUE,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    role varchar(255) not null,
    created_at datetime not null,
    updated_at datetime not null

);

CREATE TABLE IF NOT EXISTS riasec (
    id integer not null primary key AUTOINCREMENT UNIQUE,
    code vachar(255) not null,
    name vachar(255) not null,
    description TEXT not null
);

CREATE TABLE IF NOT EXISTS question (
    id integer not null primary key AUTOINCREMENT UNIQUE,
    question TEXT not null,
    riasec_id integer not null,
    FOREIGN KEY (riasec_id) REFERENCES riasec(id)
);

CREATE TABLE IF NOT EXISTS departement (
    id integer not null primary key AUTOINCREMENT UNIQUE,
    name vachar(255) not null,
    riasec_id integer not null,
    FOREIGN KEY (riasec_id) REFERENCES riasec(id)
);

CREATE TABLE IF NOT EXISTS assesment (
    date_time datetime not null
    id integer not null primary key AUTOINCREMENT UNIQUE,
    r_point integer not null,
    i_point integer not null,
    a_point integer not null,
    s_point integer not null,
    e_point integer not null,
    c_point integer not null,
    user_id integer not null,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO riasec(code, name, description) VALUES
    ('R', 'Realistic', 'These people are often good at mechanical or athletic jobs'),
    ('I', 'Investigative', 'These people like to watch, learn, analyze and solve problems),
    ('A', 'Artistic', 'These people like to work in unstructured situations where they can use their creativity'),
    ('S', 'Social', 'These people like to work with other people, rather than things'),
    ('E', 'Enterprising', 'These people like to work with others and enjoy persuading and and performing'),
    ('C', 'Conventional', 'These people are very detail oriented,organized and like to work with data');

INSERT INTO question(question,riasec_id) VALUES
    ('I like to work on cars ', 1),
    ('I like to do puzzles ', 2),
    ('I am good at working independently ', 3),
    ('I like to work in teams ', 4),
    ('I am an ambitious person,I set goals for myself ', 5),
    ('I like to organize things,files, desks/offices ', 6),
    ('I like to build things ', 1),
    ('I like to read about art and music ', 3),
    ('I like to have clear instructions to follow ', 6),
    ('I like to try to influence or persuade people ', 5),
    ('I like to do experiments ', 2),
    ('I like to teach or train people ', 4),
    ('I like trying to help people solve their problems ', 4),
    ('I like to take care of animals ', 1),
    ('I wouldnt mind working 8 hours per day in an office ', 6),
    ('I like selling things ', 5),
    ('I enjoy creative writing ', 3),
    ('I enjoy science ', 2),
    ('I am quick to take on new responsibilities ', 5),
    ('I am interested in healing people ', 4),
    ('I enjoy trying to figure out how things work ', 2),
    ('I like putting things together or assembling things ', 1),
    ('I am a creative person ',3),
    ('I pay attention to details ', 6),
    ('I like to do filing or typing ', 6),
    ('I like to analyze things (problems/situations) ', 2),
    ('I like to play instruments or sing ', 3),
    ('I enjoy learning about other cultures ', 4),
    ('I would like to start my own business ', 5),
    ('I like to cook ', 1),
    ('I like acting in plays ', 3),
    ('I am a practical person ', 1),
    ('I like working with numbers or charts ', 2),
    ('I like to get into discussions about issues ', 4),
    ('I am good at keeping records of my work ', 6),
    ('I like to lead ', 5),
    ('I like working outdoors ', 1),
    ('I would like to work in an office ', 6),
    ('Im good at math ', 2),
    ('I like helping people ', 4),
    ('I like to draw ', 3),
    ('I like to give speeches ', 5);
   
INSERT INTO departerment(name, riasec_id) VALUES
    ('Agriculture', 1),
    ('Health Assistant', 1),
    ('Computers', 1),
    ('Construction', 1),
    ('Mechanic/Machinist', 1),
    ('Engineering', 1),
    ('Food and Hospitality', 1),
    ('Marine Biology', 2),
    ('Engineering', 2),
    ('Chemistry', 2),
    ('Zoology', 2),
    ('Medicine/Surgery', 2),
    ('Consumer Economics', 2),
    ('Psychology', 2),
    ('Communications', 3),
    ('Cosmetology', 3),
    ('Fine and Performing Arts', 3),
    ('Photography', 3),
    ('Radio and TV', 3),
    ('Interior Design', 3),
    ('Architecture', 3),
    ('Counseling', 4),
    ('Nursing', 4),
    ('Physical Therapy', 4),
    ('Travel', 4),
    ('Advertising', 4),
    ('Public Relations', 4),
    ('Education', 4),
    ('Fashion Merchandising', 5),
    ('Real Estate', 5),
    ('Marketing/Sales', 5),
    ('Law', 5),
    ('Political Science', 5),
    ('International Trade', 5),
    ('Banking/Finance', 5),
    ('Accounting', 6),
    ('Court Reporting', 6),
    ('Insurance', 6),
    ('Administration', 6),
    ('Medical Records', 6),
    ('Banking', 6),
    ('Data Processing', 6);`)

	if err != nil {
		panic(err)
	}

}
