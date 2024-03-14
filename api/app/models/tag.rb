class Tag < ApplicationRecord
  has_many :taggings
  has_many :photos, through: :taggings

  def self.with_names(names)
    where(name: names)
  end
end
