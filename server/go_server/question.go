package repository

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type QuestionRepository struct {
	db *sql.DB
}

func NewQuestionRepository(db *sql.DB) *QuestionRepository {
	return &QuestionRepository{db: db}
}

func (c *QuestionRepository) FetchQuestion() ([]Question, error) {
	var sqlStatement string
	var questions []Question

	//TODO: add sql statement here
	//HINT: join table cart_items and products

	//beginanswer
	sqlStatement = `
	SELECT
		q.id,
		q.riasec_id,
		q.question,
	FROM question q
	INNER JOIN riasec r
	ON q.riasec_id = r.id
	`

	rows, err := c.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var question Question
		err := rows.Scan(&question.ID, &question.RiasecID, &question.Question)
		if err != nil {
			return nil, err
		}
		questions = append(questions, question)
	}
	return questions, nil
}

func (c *QuestionRepository) FetchCartByProductID(RiasecID int64) (Question, error) {
	var question Question
	var sqlStatement string

	sqlStatement = `
	SELECT
		q.id,
		q.question,
		q.riasec_id
	FROM question q
	INNER JOIN riasec r
	ON q.riasec_id = r.id
	WHERE q.riasec_id = ?
	`

	err := c.db.QueryRow(sqlStatement, RiasecID).Scan(&question.ID, &question.RiasecID, &question.Question)
	if err != nil {
		return question, err
	}

	return question, nil
}

func (c *QuestionRepository) InsertCartItem(question Question) error {

	sqlStatement := `
	INSERT INTO question (riasec_id, question)
	VALUES (?, ?)
	`
	_, err := c.db.Exec(sqlStatement, question.RiasecID, question.Question)
	if err != nil {
		return err
	}
	return nil
}

func (c *QuestionRepository) IncrementCartItemQuantity(question Question) error {

	sqlStatement := `
	UPDATE question
	SET question = question + 1
	WHERE id = ?
	`
	_, err := c.db.Exec(sqlStatement, question.ID)
	if err != nil {
		return err
	}
	return nil

}

func (c *QuestionRepository) ResetCartItems() error {

	sqlStatement := `
	DELETE FROM question
	`
	_, err := c.db.Exec(sqlStatement)
	if err != nil {
		return err
	}
	return nil

}
