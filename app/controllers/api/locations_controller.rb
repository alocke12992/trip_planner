class Api::LocationsController < ApplicationController
  before_action :set_trip
  

  def index
    @locations = @trip.locations.all 
    render json: @locations 
  end 

  def show
     @location = Location.find(params[:id])
  end 

  def update 
  end 

  def create
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: { errors: location.errors }, status: :unprocessable_entity 
    end
  end 

  def destroy
    Location.find(params[:id]).destroy
    render json: { message: 'Location deleted' }
  end 
  
  private 

  def location_params 
    params.require(:location).permit(:city, :state, :trip_id ) 
  end 

  def set_trip 
    @trip = Trip.find(params[:trip_id])
  end 

end
