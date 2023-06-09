$(document).ready(function () {
    // console.log("Love Sokrong");
    const body = $('body');
    const popup = `<div class="popup"></div>`;
    // loading
    const Loading = `<div class="popup"> <div class="loading"></div> </div>`;
    var tbData = $("#tbl_data");
    const btnAdd = $('.btn-add');
    const btnClose = $('.btn-close');
    const btnSave = $('.btn-save');
    const frm = `
    <form class="upl">
        <div class="frm">
            <div class="city">
                City
                <div class="btn-close">
                    <i class="fa-solid fa-x"></i>
                </div>
            </div>

            <div class="Body">
                <div class="box1">
                    <label for="">ID</label>
                    <input type="text" name="txt-id" id="txt-id" readonly>
                    <label for="">Language</label>
                    <select name="txt-language" id="txt-language">
                        <option value="1">KH</option>
                        <option value="2">En</option>
                    </select>
                    <label for="">Orders</label>
                    <input type="text" name="txt-od" id="txt-od" readonly>

                    <label for="">Status</label>
                    <select name="txt-status" id="txt-status">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <label for="">Photo</label>
                    <div class="img-btn">
                        <input type="file" name="txt-file" id="txt-file">
                        <input type="hidden" name="txt-photo" id="txt-photo">
                    </div>
                </div>

                <div class="box2">
                    <label for="">Name</label>
                    <input type="text" name="txt-name" id="txt-name" placeholder="Input Name....">
                    <label for="">Description</label>
                    <textarea name="txt-des" id="txt-des" cols="30" rows="20"></textarea>
                </div>

                
            </div>
            
            <div class="footer">
                    <div class="btn-save">
                    <span><i class="fa-solid fa-floppy-disk"></i></span> Save
                    </div>
            </div>

        </div>
    </form>`;
    //button Add
    btnAdd.click(function () {
        // console.log("Love Sokrong")
        body.append(popup);
        body.find('.popup').append(frm);
        const txtId = body.find(".frm #txt-id");
        const txtod = body.find(".frm #txt-od");
        $.ajax({
            url: 'Action/get-autoId.php',
            type: 'POST',
            cache: false,
            // processData: false,
            dataType: "json",
            beforeSend: function () {
                //work before success    
            },
            success: function (data) {
                //work after success   
                txtId.val(parseInt(data.id) + 1)
                txtod.val(parseInt(data.id) + 1);
            }
        });
    });
    //button Close
    body.on('click', '.frm .btn-close', function () {
        // console.log("Love Sokrong")
        body.find('.popup').remove()
    })
    //button save
    body.on('click', '.frm .btn-save', function () {
        // console.log("Love Sokrong")
        const txtId = body.find(".frm #txt-id");
        const txtod = body.find(".frm #txt-od");
        const txtname = body.find(".frm #txt-name");
        const txtStatus = body.find(".frm #txt-status");
        const txtdes = body.find(".frm #txt-des");
        const txtlang = body.find(".frm #txt-language");
        const txtFile = body.find(".frm #txt-file");
        const txtPhoto = body.find(".frm #txt-photo");
        const imgBox = body.find('.frm .img-btn');
        if (txtname.val() == '') {
            alert("Input your name");
            txtname.focus();
            return;
        } else if (txtdes.val() == '') {
            alert("Input your description")
            txtdes.focus();
            return;
        }
        var eThis = $(this);
        var frm = eThis.closest('form.upl');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/btn-save.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                //work before success  
                body.append(Loading)
            },
            success: function (data) {
                //work after success
                // alert("Love Sokrong")
                var tr = `
                    <tr>
                        <td>${txtId.val()}</td>
                        <td>${txtname.val()}</td>
                        <td><img src="Img/${txtPhoto.val()}" alt=""</td>
                        <td>${txtdes.val()}</td>
                        <td>${txtod.val()}</td>
                        <td>${txtlang.val()}</td>
                        <td>${txtStatus.val()}</td>
                    </tr>
                    
                
                `;
                // <img src="" alt=""></img>
                // alert("Love Sokrong")
                tbData.find('tbody').prepend(tr);
                body.find('.popup').last().remove();
                txtname.val("")
                txtdes.val("")

                txtname.focus();
                // 
                txtId.val(data.last_id + 1)
                txtod.val(data.last_id + 1)
                //change background
                imgBox.css({"background-image" :`url(Img/Img.png)`});
                imgBox.val("")
                txtFile.val("")
            }
        });
    })
    //Upload Image
    body.on('change', '#txt-file', function () {
        // alert("love Sorkrong")
        var eThis = $(this);
        var Imgbox = eThis.parents('.frm').find('.img-btn');
        var Photo = eThis.parents('.frm').find('#txt-photo')
        var frm = eThis.closest('form.upl');
        var frm_data = new FormData(frm[0]);
        $.ajax({
            url: 'Action/upl-imge.php',
            type: 'POST',
            data: frm_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend:function() {
                //work before success 
                // alert("Love Sokrong")
                body.append(Loading);   
            },
            success:function(data) {
                console.log("Love Sokrong")
                //work after success        
                Imgbox.css({"background-image" : `url(Img/${data['img-box']})`});
                body.find('.popup').last().remove();
                Photo.val(data['img-box'])
            }
        });
    })
})