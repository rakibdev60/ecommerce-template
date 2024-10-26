function createHeader() {
    return `
        <header class="flex flex-col bg-white pt-5 pb-2">
            <div class="flex justify-between gap-[70px] items-center p-[1px_10%]">
                <div>
                    <img class="w-[150px]" src="https://sajerbela.com/storage/app/public/company/2023-03-31-6426dc9918aaa.png" alt="">
                </div>
                <section class="flex p-[15px] gap-2">
                    <svg class="h-[50px] border rounded p-[8px_8px]" fill="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg>
                    <span>Call Us <br> 01000000000</span>
                </section>
                <div class=" md:h-[55px] w-1/3 flex bg-white border rounded-md overflow-hidden md:items-center">
                    <input class="md:w-[90%] md:h-[100%] md:items-center bg-transparent md:pl-2 md:text-md" type="text" placeholder="search here.." />
                    <div class="flex md:w-[10%] md:h-full md:items-center md:p-2 bg-[orange]">
                        <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="menus flex justify-between items-end lg:p-[5px_10%] font-poppins ">
                <ul class="flex gap-[25px] text-[17px]">
                    <li><a href="">Catergories</a></li>
                    <li><a href="">Brand</a></li>
                    <li><a href="">Campaign</a></li>
                    <li><a href="">Discount Product</a></li>
                    <li><a href="">Videos Shipping</a></li>
                </ul>
                <ul class="flex gap-[15px] ">
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></a><p>0</p></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></a> <p>0</p></li>
                </ul>
            </div>
        </header>
    `;
}

// document.getElementById('header').innerHTML = createHeader();
document.querySelectorAll('custom-header').forEach(el => el.outerHTML = createHeader());
