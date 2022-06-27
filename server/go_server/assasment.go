package repository

import (
	"database/sql"
	"fmt"
)

type AssasmentRepository struct {
	db *sql.DB
}

func NewAssesmentRepository(db *sql.DB) *AssasmentRepository {
	return &AssasmentRepository{db: db}
}

func (u *AssasmentRepository) FetchSales(request GetAssesmentRequest) ([]Assesment, error) {
	sqlStmt := `SELECT 
		a.id,
		a.date_time,
		a.riasec_id,
		a.r_point ,
    	a.i_point ,
    	a.a_point ,
    	a.s_point ,
    	a.e_point ,
    	a.c_point ,
    	a.user_id ,
		FROM 
		assasment a
		INNER JOIN Riasecs r ON r.riasec_id = r.id
	`

	if isValidRequest := request.IsValidRequest(); !isValidRequest {
		return nil, fmt.Errorf("bad request")
	}

	if request.StartPeriod != nil && request.EndPeriod != nil {
		sqlStmt = fmt.Sprintf("%s WHERE srdate BETWEEN ? AND ?", sqlStmt)
	}

	if request.Code != "" {
		sqlStmt = fmt.Sprintf("%s AND r.code = ?", sqlStmt)
	}

	rows, err := u.db.Query(sqlStmt, request.StartPeriod, request.EndPeriod, request.Code)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var assasment []Assement

	for rows.Next() {
		var a Assesment
		err := rows.Scan(&a.ID, &a.RPoint, &a.DateTime, &a.IPoint, &a.APoint, &a.SPoint, &a.EPoint, &a.CPoint)
		if err != nil {
			return nil, err
		}
		a.Total = a.Price * a.Quantity
		assasment = append(assasment, a)
	}

	return assasment, nil
}
