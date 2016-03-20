export default {
  /**
   * 安全的截取html字符串
   * @param  {string} str    原字符串
   * @param  {number} number 截取字数
   * @return {string}        截取后的字符串
   */
  subNoHtml(str = '', number = 200){
    return this.filterHtml(str).substr(0, number);
  },
  filterHtml(str){
    return str.replace(/<[^>]+>/g, "");
  }
};