package repository

import "time"

type User struct {
	ID        int64     `db:"id"`
	Name      string    `db:"name`
	Email     string    `db:"email"`
	Password  string    `db:"password"`
	Role      string    `db:"role"`
	Token     string    `db:"token"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

type Riasec struct {
	ID          int64  `db:"id"`
	Code        string `db:"code"`
	Name        string `db:"name"`
	Description string `db:"description"`
}

type Question struct {
	ID       int64  `db:"id"`
	Question string `db:"question"`
	RiasecID int64  `db:"riasec_id"`
}

type Departement struct {
	ID       int64  `db:"id"`
	Name     string `db:"name"`
	RiasecID int64  `db:"riasec_id"`
}

type Assesment struct {
	DateTime *time.Time `db:"date_time"`
	ID       int64      `db:"id"`
	RPoint   int64      `db:"r_point"`
	IPoint   int64      `db:"i_point"`
	APoint   int64      `db:"a_point"`
	SPoint   int64      `db:"s_point"`
	EPoint   int64      `db:"e_point"`
	CPoint   int64      `db:"c_point"`
	UserID   int64      `db:"user_id"`
}

type GetSalesRequest struct {
	StartPeriod *time.Time `db:"start_period"`
	EndPeriod   *time.Time `db:"end_period"`
	ProductID   int64      `db:"product_id"`
	ProductName string     `db:"product_name"`
}

func (r GetSalesRequest) IsEmptyRequest() bool {
	if r.StartPeriod == nil && r.EndPeriod == nil && r.ProductName == "" {
		return true
	}

	return false
}

func (r GetSalesRequest) IsValidRequest() bool {
	if r.StartPeriod == nil && r.EndPeriod != nil {
		return false
	}
	if r.StartPeriod != nil && r.EndPeriod == nil {
		return false
	}

	return true
}