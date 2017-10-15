class Api::V1::ServicesController < Api::V1::BaseController
    def getBarbersForServices
        render json: @Barber = Barber.find_by_sql(barbers_for_services_query)
    end

    def index
        respond_with Service.all
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

    def barbers_for_services_query
        "SELECT barbers.id, barbers.first_name, barbers.last_name
            FROM barbers
            INNER JOIN barbers_services
            ON barbers_services.barber_id = barbers.id
            WHERE barbers_services.service_id = #{params[:id]}"
    end
end
