/*
# Remove contact_messages table (user requested no database)

The user explicitly requested to remove the database and use a direct email approach instead.
This table was just created and contains no user data.
*/

DROP TABLE IF EXISTS contact_messages CASCADE;