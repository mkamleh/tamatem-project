import csv
import os
import django

# Set up Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tamatem_games.settings")
django.setup()

from products.enums import LocationChoices
from products.models import Product 

def import_products_from_csv(file_path):
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            Product.objects.create(
                product_id=row['id'],
                title=row['title'],
                description=row['description'],
                location=row['location'] if row['location'] in LocationChoices.values else LocationChoices.JORDAN,
                price=row['price']


            )
    print("Import complete.")

if __name__ == '__main__':
    import_products_from_csv('tamatem_games/items.csv') 