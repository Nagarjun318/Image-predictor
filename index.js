
          const inpFile = document.getElementById("inpFile");
          const previewContainer = document.getElementById("imagePreview");
          const previewImgCon = document.querySelector(".image-preview");
          const previewImage = previewContainer.querySelector(".image-preview-image");
          const previewDefaultText= previewContainer.querySelector(".image-preview-text");
          const previewText = document.getElementById("predText");
          const previewH1= previewText.querySelector(".pred-h1");
          inpFile.addEventListener("change",function() {
            const file = this.files[0];

            if(file) {
              const reader = new FileReader();
              previewImgCon.style.display = "block";
              previewDefaultText.style.display = "none";
              previewImage.style.display = "block";
              previewH1.style.display="block";

              reader.addEventListener("load", function() {
                // console.log(this);
                previewImage.setAttribute("src",this.result);

              });

              reader.readAsDataURL(file);


                    const img = document.getElementById('img-ml');
                   // const img = fileInput;
                   // Load the model.
                   mobilenet.load().then(model => {
                     // Classify the image.
                     model.classify(img).then(predictions => {
                       console.log('Predictions: ');
                       console.log(predictions);

                       // var myString = JSON.stringify(predictions[0]['className']);

                       document.getElementById("demo1").innerHTML = "1. " + predictions[0]['className'];
                       document.getElementById("demo2").innerHTML = "2. " + predictions[1]['className'];
                       document.getElementById("demo3").innerHTML = "3. " + predictions[2]['className'];
                       predictions=null;
                     });
                   });

            } else {

              previewImgCon.style.display = null;
              previewDefaultText.style.display = null;
              previewImage.style.display = null;
              previewH1.style.display=null;
              previewImage.setAttribute("src","");
              document.getElementById("demo1").innerHTML = "";
              document.getElementById("demo2").innerHTML = "";
              document.getElementById("demo3").innerHTML = "";
            }

          });
