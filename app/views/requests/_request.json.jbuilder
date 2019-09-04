json.extract! request, :id, :word, :public_id, :name, :email, :status, :created_at, :updated_at
json.url request_url(request, format: :json)
