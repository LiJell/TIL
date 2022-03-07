# Dogs vs. Cats

- Dogs vs Cats dataset 
  - https://www.kaggle.com/c/dogs-vs-cats/data 
  - 25000 images (12500 cats and 12500 dogs) 
  - Create dataset 
    - Training: 1000 samples for each class 
    - Validation: 500 samples for each class 
    - Test: 500 samples for each class

## Training a convnet from scratch on a small dataset

#### Prepare dataset

```python
import os, shutil

original_db_dir = './train'

base_dir = './cats_and_dogs_small'
os.mkdir(base_dir)
train_dir = os.path.join(base_dir, 'train')
os.mkdir(train_dir)
validation_dir = os.path.join(base_dir, 'validation')
os.mkdir(validation_dir)
test_dir = os.path.join(base_dir, 'test')
os.mkdir(test_dir)

train_cats_dir = os.path.join(train_dir, 'cats')
os.mkdir(train_cats_dir)
train_dogs_dir = os.path.join(train_dir, 'dogs')
os.mkdir(train_dogs_dir)

validation_cats_dir = os.path.join(validation_dir, 'cats')
os.mkdir(validation_cats_dir)
validation_dogs_dir = os.path.join(validation_dir, 'dogs')
os.mkdir(validation_dogs_dir)

test_cats_dir = os.path.join(test_dir, 'cats')
os.mkdir(test_cats_dir)
test_dogs_dir = os.path.join(test_dir, 'dogs')
os.mkdir(test_dogs_dir)

frames = ['cat.{}.jpg'.format(i) for i in range(1000)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(train_cats_dir, fname)
 shutil.copyfile(src,dst)

frames = ['cat.{}.jpg'.format(i) for i in range(1000,1500)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(validation_cats_dir, fname)
 shutil.copyfile(src,dst)

frames = ['cat.{}.jpg'.format(i) for i in range(1500,2000)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(test_cats_dir, fname)
 shutil.copyfile(src,dst)

frames = ['dog.{}.jpg'.format(i) for i in range(1000)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(train_dogs_dir, fname)
 shutil.copyfile(src,dst)

frames = ['dog.{}.jpg'.format(i) for i in range(1000,1500)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(validation_dogs_dir, fname)
 shutil.copyfile(src,dst)

frames = ['dog.{}.jpg'.format(i) for i in range(1500,2000)]
for fname in frames:
 src = os.path.join(original_db_dir, fname)
 dst = os.path.join(test_dogs_dir, fname)
 shutil.copyfile(src,dst)
```

---



#### Create Neural Network

```python
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from keras import models

model = models.Sequential()
model.add(Conv2D(32, (3,3), activation='relu', input_shape=(150,150,3)))
model.add(MaxPooling2D((2,2)))
model.add(Conv2D(64, (3,3), activation='relu'))
model.add(MaxPooling2D((2,2)))
model.add(Conv2D(128, (3,3), activation='relu'))
model.add(MaxPooling2D((2,2)))
model.add(Conv2D(128, (3,3), activation='relu'))
model.add(MaxPooling2D((2,2)))
model.add(Flatten())
model.add(Dense(512, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.summary()

from keras import optimizers

model.compile(loss='binary_crossentropy', optimizer=optimizers.RMSprop(lr=1e-4), metrics=['acc'])
```

![image-20220307174011390](../image.assets/image-20220307174011390.png)
