let pic = document.getElementById("picture");

function change_pic()
{
  let pic_num = Math.floor(Math.random() * 3);
  let URL;
  if (pic_num == 0) URL = "rook.png";
  else if (pic_num == 1) URL = "pawn.png";
  else if (pic_num == 2) URL = "knight.png"
  pic.innerHTML = "<img src=\"" + URL + "\" alt=\"Chess peice\" width=\"30\" height=\"20\">";
}
