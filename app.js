(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)
        customers.push(customer)
    }

    createCustomer(0, 'Karan', 'Good morning sir/Madam. Thank you for giving me the opportunity to introduce myself. My name is Dnyanesh Karan Knaojia. I am 21 years old and I m from Saharanpur.I have completed my graduation, in BCOM from Pune University.There are 2 members in my family, including me and my mother.')
    createCustomer(1, 'Manisha', 'My name is Manisha. I am from Banaras. I Completed My BE CSE in NIET UNIVERSITY Gr. Noida.')
    createCustomer(2, 'Kareena', 'My name is Kareena. I did my masters in Niet University with 80 %, and I did my graduation with 92 %.I am belonging to a large family.My technical skills are C, C++, and python.I did my project in my masters level only. Coming to my strengths; Self-motivated, Positive attitude, very enthusiastic person, and Interested to know the new things. My hobbies Listening to music, Browsing New places.')
    createCustomer(3, 'Ravi', 'Good morning sir/Madam. Thank you for giving me the opportunity to introduce myself. My name is Ravi Kumar. I am 22 years old and I m from Joga, Pune.I have completed my graduation, in BCOM from Pune University.There are 2 members in my family, including me and my mother.')
    createCustomer(4, 'Meena', 'My name is Meena. I am from Theni. I Completed My BE EEE in ANNAMALAI UNIVERSITY Chidambaram.')

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()

