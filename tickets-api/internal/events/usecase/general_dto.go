package usecase

type EventDTO struct {
	ID 						string 	`json:"id"`
	Name 					string 	`json:"name"`
	Location 			string 	`json:"location"`
	Organization 	string 	`json:"organization"`
	Rating 				string 	`json:"rating"`
	Date 					string 	`json:"date"`
	ImageURL 			string 	`json:"image_url"`
	Capacity 			int 		`json:"capacity"`
	Price 				float64 `json:"price"`
	PartnerID 		int 		`json:"partner_id"`
}

type SpotDTO struct {
	ID string `json:"id"`
	Name string `json:"name"`
}

type TicketDTO struct {
	ID string `json:"id"`
	SpotID string `json:"spot_id"`
	TicketType string `json:"ticket_type"`
	Price float64 `json:"price"`
}


