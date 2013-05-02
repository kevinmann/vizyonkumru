class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :title
      t.string :thumbnail
      t.text :caption
      t.string :share_code
      t.boolean :featured
      t.string :link
      t.string :downloadable

      t.timestamps
    end
  end
end
