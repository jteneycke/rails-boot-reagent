class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :published_at
end
