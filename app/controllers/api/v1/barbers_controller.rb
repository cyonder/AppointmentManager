class Api::V1::BarbersController < Api::V1::BaseController
  def index
    respond_with Barber.all
  end

  def create
    respond_with :api, :v1, Barber.create(barber_params)

    # barber = Barber.create(barber_params)
    # render json: barber
  end

  private

  def barber_params
    params.require(:barber).permit(:first_name, :last_name, :email, :phone)
  end
end
