//<i class="check-star" v-html="getSvg('star')"></i>

export const svgNoteService = { getSvgNote }

const Svgs = {
  add_text:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M490.001 925.999V865L701.77 653.231l60.999 60.999L551 925.999h-60.999Zm-360-207.307v-45.384h294.615v45.384H130.001Zm671.921-43.615-60.999-60.999 29-29q6.077-6.077 15.808-6.077 9.73 0 16.191 6.077l29 29q6.077 6.461 6.077 16.191 0 9.731-6.077 15.808l-29 29ZM130.001 554.846v-45.384h461.922v45.384H130.001Zm0-163.462v-45.383h461.922v45.383H130.001Z"/></svg>',
  add_image:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M212.309 915.999q-30.308 0-51.308-21t-21-51.308V308.309q0-30.308 21-51.308t51.308-21h535.382q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V308.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm57.693-90.001h423.073L561.538 590.616 449.231 736.769l-80-102.306-99.229 131.536ZM200 856V296 856Z"/></svg>',
  add_video:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M172.309 276.001 242.308 416h120l-69.999-139.999h80L442.308 416h120l-69.999-139.999h80L642.308 416h120l-69.999-139.999h95.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H172.309q-30.308 0-51.308-21t-21-51.308V348.309q0-30.308 21-51.308t51.308-21ZM160 475.999v327.692q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h615.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V475.999H160Zm0 0V816 475.999Z"/></svg>',

  add_todo: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M300 770q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"/></svg>',
    
  copy_note:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M762.306 865.229H288.464q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V213.694q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h327.229l204.306 204.306v447.229q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082ZM593.001 379.768V201.385H288.464q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v593.842q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h473.842q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V379.768H593.001ZM157.694 995.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V367.387h45.384v570.919q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h449.919v45.384H157.694Zm118.461-794.614v178.383-178.383V819.845 201.385Z"/></svg>',
  delete_note:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M292.309 915.999q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115V336h-40v-59.999H360v-35.384h240v35.384h179.999V336h-40v507.691q0 30.308-21 51.308t-51.308 21H292.309ZM680 336H280v507.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h375.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V336ZM376.155 776h59.999V416h-59.999v360Zm147.691 0h59.999V416h-59.999v360ZM280 336v520-520Z"/></svg>',
  color_picker:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M479.231 955.999q-77.769 0-146.923-29.962-69.153-29.961-120.769-81.576-51.615-51.616-81.576-120.962Q100.001 654.154 100.001 576q0-79.154 30.77-148.499 30.769-69.346 83.576-120.654 52.808-51.307 123.538-81.076 70.731-29.77 150.884-29.77 75 0 142.153 25.577 67.154 25.577 117.962 70.808 50.807 45.23 80.961 107.499 30.154 62.269 30.154 135.038 0 103.845-61.731 162.46-61.73 58.616-158.268 58.616h-72.461q-17.078 0-27.309 11.154-10.231 11.154-10.231 26.386 0 18.539 15 38.538 15 20 15 45.923 0 39.615-21.923 58.807t-58.845 19.192ZM480 576Zm-220 29.999q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q281.384 506.001 260 506.001t-35.692 14.307Q210.001 534.616 210.001 556t14.307 35.692q14.308 14.307 35.692 14.307Zm120-160q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q401.384 346.001 380 346.001t-35.692 14.307Q330.001 374.616 330.001 396t14.307 35.692q14.308 14.307 35.692 14.307Zm200 0q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q601.384 346.001 580 346.001t-35.692 14.307Q530.001 374.616 530.001 396t14.307 35.692q14.308 14.307 35.692 14.307Zm120 160q21.384 0 35.692-14.307 14.307-14.308 14.307-35.692t-14.307-35.692Q721.384 506.001 700 506.001t-35.692 14.307Q650.001 534.616 650.001 556t14.307 35.692q14.308 14.307 35.692 14.307ZM479.231 896q9.769 0 15.269-4.808Q500 886.385 500 878q0-14-15-31.461-15-17.462-15-54.693 0-42.769 29-69.307Q528 696 570 696h70q70.616 0 115.308-41.385Q800 613.23 800 534.923q0-121.385-93.077-200.154Q613.846 256 488.769 256q-137.154 0-232.961 93Q160 442 160 576q0 133 93.5 226.5T479.231 896Z"/></svg>',
  pin_note:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M619.999 584.462 691.536 656v59.999H509.999v219.998L480 965.996l-29.999-29.999V715.999H268.464V656l71.537-71.538V296h-40v-59.999h359.998V296h-40v288.462ZM354 656h252l-46-46V296H400v314l-46 46Zm126 0Z"/></svg>',
  unpin_note:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M619.999 584.462 691.536 656v59.999H509.999v219.998L480 965.996l-29.999-29.999V715.999H268.464V656l71.537-71.538V296h-40v-59.999h359.998V296h-40v288.462Z"/></svg>',
}

function getSvgNote(iconName) {
  return Svgs[iconName]
}
