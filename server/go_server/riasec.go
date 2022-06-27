package repository

import "database/sql"

type RiasecRepository struct {
	db *sql.DB
}

func NewRiasecRepository(db *sql.DB) *RiasecRepository {
	return &RiasecRepository{db: db}
}

func (p *RiasecRepository) FetchProductByID(id int64) (Riasec, error) {

	var riasec Riasec
	err := p.db.QueryRow("SELECT * FROM riasec WHERE id = ?", id).Scan(&riasec.ID, &riasec.Code, &riasec.Name, &riasec.Description)
	if err != nil {
		return riasec, err
	}
	return riasec, nil

}

func (p *RiasecRepository) FetchRiasecByCode(riasecCode string) (Riasec, error) {

	var riasec Riasec
	err := p.db.QueryRow("SELECT * FROM riasec WHERE code = ?", riasecCode).Scan(&riasec.ID, &riasec.Code, &riasec.Name, &riasec.Description)
	if err != nil {
		return riasec, err
	}
	return riasec, nil
}

func (p *RiasecRepository) FetchRiasec() ([]Riasec, error) {

	rows, err := p.db.Query("SELECT * FROM riasec")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var riasecs []Riasec
	for rows.Next() {
		var riasec Riasec
		err := rows.Scan(&riasec.ID, &riasec.Code, &riasec.Name, &riasec.Description)
		if err != nil {
			return nil, err
		}
		riasecs = append(riasecs, riasec)
	}
	return riasecs, nil

}
