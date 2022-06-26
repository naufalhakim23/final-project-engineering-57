package api

import (
	"fmt"
	repository "project/repository"

	"github.com/gin-gonic/gin"
)

type API struct {
	userRepo  repository.UserRepo
	adminRepo repository.AdminRepo
	gin       *gin.Engine
}

func NewAPI(userRepo repository.UserRepo, adminRepo repository.AdminRepo) *API {
	gin := gin.Default()
	api := &API{
		userRepo:  userRepo,
		adminRepo: adminRepo,
		gin:       gin,
	}

	gin.POST("/Register", api.Register)
	gin.POST("/Login", api.Login)
	gin.POST("/RegisterAdmin", api.RegisterAdmin)
	gin.POST("/Logout", api.AuthMiddleWare(api.Logout))
	gin.GET("/Showing", api.GetTask)
	gin.POST("/Add", api.AuthMiddleWare(api.CreateTask))
	gin.PUT("/Edit", api.AuthMiddleWare(api.UpdateTask))
	gin.DELETE("/Delete", api.DeleteTask)
	return api
}

func (api *API) Handler() *gin.Engine {
	return api.gin
}

func (api *API) Start() {
	fmt.Println("http://localhost:8008/")
	api.Handler().Run(":8008")
}
