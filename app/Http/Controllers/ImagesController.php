<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Image;
use App;
use App\Language;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Exception;

class ImagesController extends Controller
{
    public function getImages($position, $offset, $limit)
    {
        $code = Lang::getLocale();
        $languageParam = Language::where('code', '=', $code)->first();

        try {
            $images = Image::select(
                'images.path',
                'images.thumbnailPath',
                'images.order_number',
                'image_languages.title',
                'image_languages.altText'
            )->join('image_languages', 'images.id', '=', 'image_languages.image_id')
                ->where('image_languages.language_id',$languageParam->id)
                ->where('images.position',$position)->skip($offset)->take($limit)
                ->orderBy('images.order_number', 'desc')
                ->get();

            return response()->json(['images' => $images]);
        } catch ( Exception $e) {
            Log::error('====== Getting images ======= ' . json_encode($e->getMessage()));
        }
    }

    public function imageUploadResultsPage(): string
    {
        $imagesPath = Helper::getImages('/public/img/results/thumb/2021-1');
        $counter = 337;

        foreach ($imagesPath as $imagePath) {
            $counter++;
            $languages = Language::select()->get();

            try{
               $image = Image::updateOrCreate(
                    ['path' => 'fullSizeImages/2021-1/'.$imagePath, 'thumbnailPath' => 'thumb/2021-1/'.$imagePath, 'order_number' =>$counter,  'position' => 'results']
                );
                $wasRecentlyCreated = $image->wasRecentlyCreated;
                $wasChanged = $image->wasChanged();
                if($wasRecentlyCreated && !$wasChanged){
                    foreach ($languages->toArray() as $language) {
                        if($language['code'] === 'sr'){
                            if($imagePath[0] === 5){
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            }else{
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            }
                            $altText = 'Rast brade';
                        }else{
                            if($imagePath[0] === 1){
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            }else{
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            }
                            $altText = 'Beard growth';
                        }
                        $image->languages()->attach($language['id'], ['image_id'=> $image->id, 'title' =>  $title , 'altText' =>  $altText.''.$title , 'description' => $title .' '.$altText ]);
                    }
                }
            } catch (Exception $exception) {

                return $exception->getMessage();
            }
        }

        return 'done';
    }
    public function imageUploadElixirPage(): string
    {
        $images = Image::where('images.position', '=','elixir')->get();

        foreach ($images as $image) {
            $image->delete();
        }

        $imagesPath = Helper::getImages('/public/img/elixir/results_gallery');

        foreach ($imagesPath as $imagePath) {
            $arrEx =  explode('-',$imagePath);
            $orderNumber = trim($arrEx[2], '.png');
            try{
                $languages = Language::select()->get();
                $image = Image::updateOrCreate(
                    ['path' => $imagePath, 'thumbnailPath' => 'thumb/'.$imagePath, 'order_number' =>$orderNumber,  'position' => 'elixir']
                );
                $wasRecentlyCreated = $image->wasRecentlyCreated;
                $wasChanged = $image->wasChanged();

                if ($wasRecentlyCreated && !$wasChanged) {
                    foreach ($languages->toArray() as $language) {
                        if($language['code'] === 'sr') {
                            if ($imagePath[0] === 5) {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            } else {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            }
                            $altText = 'Rast brade';
                        } else {
                            if ($imagePath[0] === 1) {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            } else {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            }
                            $altText = 'Beard growth';
                        }
                        $image->languages()->attach($language['id'], ['image_id'=> $image->id, 'title' =>  $title , 'altText' =>   $altText.''.$title  , 'description' => $title .' '.$altText ]);
                    }
                }

            } catch (Exception $exception) {
                Log::error('=============== image upload goes wrong ============ ' . json_encode($exception->getMessage()));
            }
        }

        return 'done';
    }

    public function clearTestimonials(): string
    {
        try {
            $images = Image::where('images.position', 'testimonials')->get();

            foreach($images as $image) {
                $image->delete();
            }
            return 'done!';
        } catch (Exception $exception) {
            return $exception->getMessage();
        }

    }
    public function imageUploadTestimonialsPage($languages): string
    {
        $imagesPath = Helper::getImages('/public/img/testimonials/' . $languages . '/');
        $counter = 0;

        foreach ($imagesPath as $imagePath) {
            try {
                $counter++;
                $image = Image::updateOrCreate(
                    ['path' => $languages . '/' . $imagePath, 'thumbnailPath' => $languages . '/thumb/' . $imagePath, 'order_number' => $counter, 'position' => 'testimonials']
                );
                $wasRecentlyCreated = $image->wasRecentlyCreated;
                $wasChanged = $image->wasChanged();

                if ($wasRecentlyCreated && !$wasChanged) {
                    if ($languages === 'sr') {
                        $lanId = 1;
                        $altText = 'testimonials eliksir za bradu ' . $counter;
                    } elseif ($languages === 'ar') {
                        $lanId = 3;
                        $altText = 'محلول اللحية ' . $counter;
                    } else {
                        $lanId = 2;
                        $altText = 'testimonials Beard Elixir ' . $counter;
                    }

                    $image->languages()->attach($lanId, ['image_id' => $image->id, 'title' => '', 'altText' => $altText, 'description' => '']);
                }
            }catch (Exception $exception) {
                    Log::error('images upload pivot goes wrong' . json_encode($exception->getMessage()));
                    return $exception->getMessage();
                }
            }

        return 'done!';
    }
    public function imageUploadHomePage(): string
    {
        $images = Image::where('images.position', 'homepage')->get();

        foreach($images as $image){
            $image->delete();
        }

        $imagesPath = Helper::getImages('/public/img/results/homepage');
        $counter = 0;

        foreach ($imagesPath as $imagePath) {
            $counter++;
            $languages = Language::select()->get();

            try {
                $image = Image::updateOrCreate(
                    ['path' => $imagePath, 'thumbnailPath' => 'thumb/'.$imagePath, 'order_number' =>$counter,  'position' => 'homepage']
                );

                $wasRecentlyCreated = $image->wasRecentlyCreated;
                $wasChanged = $image->wasChanged();
                if ($wasRecentlyCreated && !$wasChanged) {
                    foreach ($languages->toArray() as $language) {
                        if ($language['code'] === 'sr') {
                            if ($imagePath[0] === 5) {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            } else {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            }
                            $altText = 'Rast brade';
                        } else {
                            if ($imagePath[0] == 1) {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottle',[], $language['code']);
                            } else {
                                $title = trans('image.after',[], $language['code']) . ' ' . $imagePath[0] . ' ' . trans('image.bottles',[], $language['code']);
                            }
                            $altText = 'Beard growth';
                        }

                        $image->languages()->attach($language['id'], ['image_id'=> $image->id, 'title' =>  $title , 'altText' =>  $altText.''.$title , 'description' => $title .' '.$altText ]);
                    }
                }
            } catch (Exception $exception) {
                Log::error('=============== image upload goes wrong ============ ' . json_encode($exception->getMessage()));
            }
        }
        return 'Done';
    }
}
