/* jshint node: true */

module.exports = {
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('moment-range', '^3.0.0');
  }
};
