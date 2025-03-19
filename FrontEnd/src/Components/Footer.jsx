import React from 'react'

function Footer() {
  return (
    <div class="bg-[#183b50] text-[#fdf0d5] py-8">
    <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            
            <div>
                <h2 class="text-2xl font-bold">Shirkadeena</h2>
                <p class="mt-2 text-gray-300">Waxaan bixinaa adeegyo tayo sare leh oo casri ah.</p>
            </div>

             {/* Links */}
            <div>
                <h2 class="text-2xl font-bold">Contacts</h2>
                <ul class="mt-2 space-y-2">
                    <li><a href="/" class="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" class="hover:text-gray-400">About</a></li>
                    <li><a href="/product" class="hover:text-gray-400">Products</a></li>
                    <li><a href="/contact" class="hover:text-gray-400">Contacts</a></li>
                </ul>
            </div>

            {/* Social Media  */}
            <div>
                <h2 class="text-2xl font-bold">Contact</h2>
                <div class="flex justify-center md:justify-start mt-2 space-x-4">
                    <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook text-xl"></i></a>
                    <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter text-xl"></i></a>
                    <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram text-xl"></i></a>
                </div>
            </div>
        </div>

        {/* Copyright Section */}
        <div class="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400">
            © 2025 Shirkadeena. Xuquuqda Waa Dhamaan.
        </div>
    </div>
</div>

  )
}

export default Footer