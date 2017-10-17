class Api::V1::BarbersController < Api::V1::BaseController
    # TODO: Get current_user.shop_id

    def index
        respond_with User.where(:shop_id => "1")
    end

    def create
        respond_with :api, :v1, User.create(barber_params)
    end

    def destroy
        respond_with User.destroy(params[:id])
    end

    def update
        barber = User.find(params[:id])
        barber.update(barber_params)
        respond_with barber
    end

    private

    def barber_params
        params.require(:barber).permit(:first_name, :last_name, :email, :phone)
    end
end
