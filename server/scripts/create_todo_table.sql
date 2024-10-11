CREATE SEQUENCE IF NOT EXISTS todo_id_seq MINVALUE 1

CREATE TABLE IF NOT EXISTS todo (
	id integer NOT NULL DEFAULT nextval('todo_id_seq'),
	task text NOT NULL,
	updated_on timestamp NOT NULL,
	PRIMARY KEY(id)
	);