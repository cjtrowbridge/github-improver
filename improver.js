var Containers = document.getElementsByClassName("container new-discussion-timeline experiment-repo-nav");

for(var i=0, len=Containers.length; i<len; i++)
{
  Containers[i].style["width"] = 'calc(100% - 2em)';
  Containers[i].style["margin"] = '0 1em 0 1em';
}
