json.extract! lesson, :id, :name, :link, :created_at, :updated_at
json.url lesson_url(lesson, format: :json)
