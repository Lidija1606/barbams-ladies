#Project Start

1. Install dependencies `composer install`
2. Add .env
3. Generate APP_KEY php artisan key:generate
4. Import database (request it from developers)   
5. `php artisan serve`

#Image upload

## Testimonials
Add images into public/img/testimonials/{language}
and public/img/testimonials/{language}/thumb

### How it works
Ajax request at testimonial page gets data (image path) from DB.
When you want to add more images, you have to update file directory and DB.

*Step 1* - remove all paths from image table
http://127.0.0.1:8000/imageUploadTestimonialsPage/clear

*Step 2* - insert path for all languages
http://127.0.0.1:8000/imageUploadTestimonialsPage/{language}

***
### Production release
When code is deployed visit links:
https://barbams.com/imageUploadTestimonialsPage/clear
https://barbams.com/imageUploadTestimonialsPage/en
https://barbams.com/imageUploadTestimonialsPage/sr
https://barbams.com/imageUploadTestimonialsPage/ar

##Results page

*Step 1* - add images into new subfolder
public/img/results/fullSizeImages/{subfolder}
*Step 2* - make change in the code

```
 app/Http/Controllers/ImagesController.php - imageUploadResultsPage();
 
 $imagesPath = Helper::getImages('/public/img/results/thumb/{subfolder}');
 
 $counter = {last order_number in image table where position === results};
 .
 .
 .
 
 ['path' => 'fullSizeImages/{subfolder}/'.$imagePath, 'thumbnailPath' => 'thumb/{subfolder}/'.$imagePath, 'order_number' =>$counter,  'position' => 'results']

```
*Step 3* - visit link
http://127.0.0.1:8000/imageUpdateResultsPage

***
### Production release
When code is deployed visit links:
https://barbams.com/imageUpdateResultsPage


