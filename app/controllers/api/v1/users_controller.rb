class Api::V1::UsersController < Api::V1::BaseController
    def index
        respond_with User.all
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
