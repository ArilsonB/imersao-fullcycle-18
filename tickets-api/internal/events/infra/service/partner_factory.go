package service

type PartnerFactory interface {
	ReserveSpot(spotID string, ticketID string) error
	ReservationRequest(req *ReservationRequest) ([]ReservationResponse, error)
}