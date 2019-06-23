## users_groupsテーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| body     | text    |                                |
| image    | string  |                                |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

| Column     | Type    | Options                        |
| ---------- | ------- | ------------------------------ |
| user_id    | integer | null: false, foreign_key: true |
| message_id | integer | null: false, foreign_key: true |
| group_name | string  | null: false                    |

### Association
- has_many :users, through: users_groups
- has_many :messages
- has_many :users_groups

## usersテーブル

| Column | Type   | Options                                |
| ------ | ------ | -------------------------------------- |
| name   | string | index: true, null: false, unique: true |
| email  | string | null: false, unique: true              |

### Association
- has_many :groups, through: users_groups
- has_many :messages
- has_many :users_groups