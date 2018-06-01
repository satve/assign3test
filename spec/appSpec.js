describe("App", () => {
  describe("Counter", () => {
    const button = document.querySelector('#click-me')
    it("is set to 120 when the button is clicked", () => {
      button.click();
      expect(counter.textContent).toBe("120")
    })
  })


  describe("Button", () => {
    const button = document.querySelector('#click-me')
    it("has an ID of 'click-me'", () => {
      expect(button.id).toBe('click-me');
    })
  })


  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(4)).toBe(24);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(0)).toBe(1);
    })
  })


  describe("Computer", () => {
    const pc = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(pc.hardDriveSpace).toBe(512);
    })
  })


  describe("installProgram", () => {
    const pc = new Computer();
    beforeEach(function (done) {
      pc.installProgram(377, function () {
        done();
      })
    })

    it("can install a program if there is sufficient space", (done) => {
      expect(pc.hardDriveSpace).toBe(135)
      done();
    })
  })


  describe("installProgram", () => {
    const pc = new Computer();
    beforeEach(function (done) {
      pc.installProgram(786, function () {
        done();
      })
    })

    it("will not install the program if there is insufficient space", (done) => {
      expect(pc.hardDriveSpace).toBe(512)
      done();
    })
  })


  describe("format", () => {
    const pc = new Computer();
    it("resets the hard drive to 512, even after programs have been installed", () => {
      pc.hardDriveSpace = 500;
      pc.format();
      expect(pc.hardDriveSpace).toBe(512);
    })
  })
})