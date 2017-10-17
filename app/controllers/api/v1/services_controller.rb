class Api::V1::ServicesController < Api::V1::BaseController
    # TODO: Get current_user.shop_id

    def index
        respond_with Service.where(:shop_id => "1")
    end

    def create
        respond_with :api, :v1, Service.create(service_params)
    end

    def destroy
        respond_with Service.destroy(params[:id])
    end

    def update
        service = Service.find(params[:id])
        service.update(service_params)
        respond_with service
    end

    private

    def service_params
        params.require(:service).permit(:service_name, :price, :time)
    end
end
