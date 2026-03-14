<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL
</script>

<template>
  <div class="bg-surface-50 font-body text-surface-900 antialiased">

    <!-- ═══ STICKY LOGO ═══ -->
    <div class="fixed left-6 top-6 z-50">
      <img
        :src="`${base}pekemind_logo_v4.svg`"
        alt="PEKEMIND"
        class="h-16 w-auto drop-shadow-sm md:h-[11.2rem]"
      />
    </div>

    <!-- ═══ HERO ═══ -->
    <section class="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 md:pt-32 md:pb-20">
      <div class="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-ceruleo/10 blur-[120px]" />

      <div class="relative z-10 mx-auto max-w-5xl text-center">
        <h1 class="font-heading text-[clamp(2.2rem,6vw,5.5rem)] font-800 leading-[1.05] tracking-tighter-2 opacity-0 animate-fade-up">
          Deja de preguntarte cada día si lo estás haciendo bien con tu bebé.
        </h1>
        <p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-surface-500 opacity-0 animate-fade-up-delay-1 md:text-xl">
          En solo 5 minutos al día sabrás exactamente qué hacer, qué observar y podrás acostarte con la tranquilidad de que tu bebé va por buen camino.
        </p>
        <p class="mt-10 text-xs uppercase tracking-[0.3em] text-accent-ceruleo opacity-0 animate-fade-up-delay-2">scroll to explore</p>

        <div class="mx-auto mt-10 max-w-md opacity-0 animate-fade-up-delay-3">
          <img
            class="mx-auto block w-full rounded-lg animate-float"
            :src="`${base}2-PK.svg`"
            alt="Padre o madre con bebé en escena emocional"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ PAIN POINTS ═══ -->
    <section class="px-6 py-24 md:py-36">
      <div class="mx-auto max-w-3xl">
        <h2 class="font-heading text-4xl font-700 tracking-tighter-2 md:text-5xl">
          ¿Te suena familiar?
        </h2>
        <ul class="mt-16 space-y-0">
          <li class="group flex items-start gap-5 border-b border-surface-200 py-6 transition-colors duration-300 hover:border-accent-ceruleo/40">
            <span class="mt-1 text-xs text-surface-400 transition-colors duration-300 group-hover:text-accent-ceruleo">✕</span>
            <span class="text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Googleando a las 11:47 p.m. "¿Es normal que no gatee aún?"</span>
          </li>
          <li class="group flex items-start gap-5 border-b border-surface-200 py-6 transition-colors duration-300 hover:border-accent/40">
            <span class="mt-1 text-xs text-surface-400 transition-colors duration-300 group-hover:text-accent">✕</span>
            <span class="text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Comparando a tu bebé con el hijo de tu amiga</span>
          </li>
          <li class="group flex items-start gap-5 border-b border-surface-200 py-6 transition-colors duration-300 hover:border-accent-beige/50">
            <span class="mt-1 text-xs text-surface-400 transition-colors duration-300 group-hover:text-accent-beige">✕</span>
            <span class="text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Sintiendo culpa por no saber si estás estimulando lo suficiente</span>
          </li>
          <li class="group flex items-start gap-5 border-b border-surface-200 py-6 transition-colors duration-300 hover:border-accent-ceruleo/40">
            <span class="mt-1 text-xs text-surface-400 transition-colors duration-300 group-hover:text-accent-ceruleo">✕</span>
            <span class="text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Discutiendo con tu pareja porque no saben si deben preocuparse o no</span>
          </li>
          <li class="group flex items-start gap-5 border-b border-surface-200 py-6 transition-colors duration-300 hover:border-accent/40">
            <span class="mt-1 text-xs text-surface-400 transition-colors duration-300 group-hover:text-accent">✕</span>
            <span class="text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Preguntándote en silencio: "¿Y si estoy haciendo algo mal?"</span>
          </li>
        </ul>
        <p class="mt-12 font-heading text-2xl font-600 text-accent md:text-3xl">
          No necesitas más información. Necesitas claridad.
        </p>
      </div>
    </section>

    <!-- ═══ CTA 1 ═══ -->
    <section class="px-6 pb-20 text-center">
      <a
        href="#oferta"
        class="group inline-flex items-center gap-3 rounded-full border border-surface-300 px-10 py-5 font-heading text-sm font-600 uppercase tracking-[0.15em] text-surface-700 transition-all duration-500 hover:border-accent-ceruleo hover:bg-accent-ceruleo/10 hover:text-accent-ceruleo"
      >
        QUIERO DEJAR DE DUDAR Y TENER CLARIDAD DIARIA
        <span class="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
      </a>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ BENEFITS ═══ -->
    <section class="px-6 py-24 md:py-36">
      <div class="mx-auto max-w-5xl">
        <h2 class="font-heading text-4xl font-700 tracking-tighter-2 md:text-5xl">
          Con PEKEMIND vas a lograr:
        </h2>
        <div class="mt-16 grid gap-px overflow-hidden rounded-lg bg-surface-200 sm:grid-cols-2 lg:grid-cols-3">
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <span class="text-sm text-accent-ceruleo">01</span>
            <p class="mt-4 text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Saber exactamente qué hacer cada día con tu bebé</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <span class="text-sm text-accent">02</span>
            <p class="mt-4 text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Entender qué es normal y qué no lo es</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <span class="text-sm text-accent-beige">03</span>
            <p class="mt-4 text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Reducir tu ansiedad parental</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <span class="text-sm text-accent-ceruleo">04</span>
            <p class="mt-4 text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Tomar decisiones sin pánico</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100 sm:col-span-2 lg:col-span-1">
            <span class="text-sm text-accent">05</span>
            <p class="mt-4 text-lg text-surface-600 transition-colors duration-300 group-hover:text-surface-900">Sentirte seguro/a como mamá o papá</p>
          </div>
        </div>
        <div class="mt-20 flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div class="flex-1">
            <p class="text-xl leading-relaxed text-surface-500">
              Vas a dejar de improvisar. Vas a dejar de comparar. Vas a dejar de sobrepensar.
            </p>
            <p class="mt-4 font-heading text-2xl font-700 text-surface-900">Y vas a empezar a sentir tranquilidad real.</p>
          </div>
          <div class="w-full max-w-sm flex-shrink-0 md:w-1/2">
            <img
              class="w-full rounded-lg animate-float-slow"
              :src="`${base}3-PK.svg`"
              alt="Momentos cotidianos de crianza con bebé"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ HOW IT WORKS ═══ -->
    <section class="px-6 py-24 md:py-36">
      <div class="mx-auto max-w-5xl">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 class="font-heading text-4xl font-700 tracking-tighter-2 md:text-5xl">
            ¿Cómo lo vas a lograr?
          </h2>
          <p class="max-w-md text-surface-500">
            No con un curso largo. No con 1,800 actividades. No con teorías complicadas. Lo lograrás con un sistema diario simple:
          </p>
        </div>

        <div class="mt-20 space-y-0 divide-y divide-surface-200">
          <!-- Feature 1 -->
          <div class="group grid gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10">
            <span class="font-heading text-6xl font-800 text-surface-200 transition-colors duration-500 group-hover:text-accent-ceruleo">1</span>
            <div>
              <h3 class="font-heading text-2xl font-700 text-surface-900 md:text-3xl">Una misión clara por día</h3>
              <ul class="mt-6 space-y-3">
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent-ceruleo">→</span> Qué estimular</li>
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent-ceruleo">→</span> Qué actividad hacer (5-10 min)</li>
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent-ceruleo">→</span> Qué observar</li>
              </ul>
              <p class="mt-6 border-l-2 border-accent-ceruleo/30 pl-5 text-sm italic text-surface-400">Y te recuerda que no necesitas hacerlo perfecto</p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="group grid gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10">
            <span class="font-heading text-6xl font-800 text-surface-200 transition-colors duration-500 group-hover:text-accent">2</span>
            <div>
              <h3 class="font-heading text-2xl font-700 text-surface-900 md:text-3xl">Check-in emocional diario</h3>
              <p class="mt-4 text-surface-500">La app te pregunta cómo te sientes. Y según tu respuesta:</p>
              <ul class="mt-4 space-y-3">
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent">→</span> Te tranquiliza</li>
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent">→</span> Te explica lo que es normal</li>
                <li class="flex items-center gap-3 text-surface-500"><span class="text-accent">→</span> Te da un audio breve de 2 minutos para bajar la ansiedad</li>
              </ul>
              <p class="mt-6 border-l-2 border-accent/30 pl-5 text-sm italic text-surface-400">Porque si tú estás bien, tu bebé también.</p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="group grid gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10">
            <span class="font-heading text-6xl font-800 text-surface-200 transition-colors duration-500 group-hover:text-accent-beige">3</span>
            <div>
              <h3 class="font-heading text-2xl font-700 text-surface-900 md:text-3xl">Chat de dudas que primero te calma y luego te guía</h3>
              <p class="mt-4 leading-relaxed text-surface-500">
                No es solo información. Primero baja tu ansiedad. Luego explica. Después te dice qué hacer hoy. Y solo te alerta cuando realmente es necesario.
              </p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="group grid gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10">
            <span class="font-heading text-6xl font-800 text-surface-200 transition-colors duration-500 group-hover:text-accent-ceruleo">4</span>
            <div>
              <h3 class="font-heading text-2xl font-700 text-surface-900 md:text-3xl">Evaluación mensual sin alarmismo</h3>
              <p class="mt-4 leading-relaxed text-surface-500">
                En minutos sabrás si todo está dentro del rango esperado o si hay un área que simplemente debes observar. Sin miedo. Sin comparaciones tóxicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ REINFORCED PROMISE ═══ -->
    <section class="relative overflow-hidden px-6 py-28 text-center md:py-40">
      <div class="pointer-events-none absolute inset-0 bg-accent-beige/[0.06]" />
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-ceruleo/10 blur-[100px]" />

      <div class="relative mx-auto max-w-3xl">
        <p class="font-heading text-3xl font-700 leading-tight tracking-tighter-2 md:text-5xl lg:text-6xl">
          En 30 días no tendrás más información. Tendrás algo más valioso:
        </p>
        <p class="mt-6 font-heading text-3xl font-800 text-accent md:text-5xl lg:text-6xl">
          Tranquilidad estructurada.
        </p>
        <div class="mx-auto mt-16 max-w-xs">
          <img
            class="w-full rounded-lg animate-float"
            :src="`${base}1-PK.svg`"
            alt="Familia acompañando el desarrollo del bebé"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ OFFER ═══ -->
    <section id="oferta" class="px-6 py-24 md:py-36">
      <div class="mx-auto max-w-5xl">
        <h2 class="font-heading text-4xl font-700 tracking-tighter-2 md:text-5xl">
          Si te unes hoy como fundador obtienes:
        </h2>

        <div class="mt-8">
          <span class="inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-600 uppercase tracking-[0.2em] text-accent">
            oferta especial fundador
          </span>
        </div>

        <div class="mt-12 grid gap-px overflow-hidden rounded-lg bg-surface-200 sm:grid-cols-2">
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <h3 class="font-heading text-lg font-600 text-surface-900">Misiones Diarias Personalizadas</h3>
            <p class="mt-3 text-sm text-surface-400">Una guía clara cada día durante todo el año.</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <h3 class="font-heading text-lg font-600 text-surface-900">Check-in Emocional + Audios Calmantes</h3>
            <p class="mt-3 text-sm text-surface-400">Acompañamiento real, no solo contenido.</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <h3 class="font-heading text-lg font-600 text-surface-900">Chat Ilimitado de Dudas</h3>
            <p class="mt-3 text-sm text-surface-400">Respuestas estructuradas que primero te tranquilizan.</p>
          </div>
          <div class="group bg-surface-50 p-8 transition-all duration-500 hover:bg-surface-100">
            <h3 class="font-heading text-lg font-600 text-surface-900">Evaluaciones Mensuales de Desarrollo</h3>
            <p class="mt-3 text-sm text-surface-400">Claridad sin alarmismo.</p>
          </div>
        </div>

        <!-- Bonus -->
        <div class="mt-10 rounded-lg border border-accent-beige/30 p-8 md:p-10">
          <h3 class="font-heading text-xl font-700 text-surface-900">Bonos exclusivos fundador</h3>
          <ul class="mt-8 space-y-6">
            <li class="flex items-start gap-4">
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-ceruleo/15 text-xs text-accent-ceruleo">+</span>
              <span class="text-surface-600"><strong class="text-surface-900">Kit "Primeros 30 Días Sin Pánico"</strong> - Checklist + guía rápida para empezar con seguridad</span>
            </li>
            <li class="flex items-start gap-4">
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-beige/20 text-xs text-accent-beige">+</span>
              <span class="text-surface-600"><strong class="text-surface-900">Precio Fundador Congelado</strong> - No pagarás el precio completo durante el primer año</span>
            </li>
            <li class="flex items-start gap-4">
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs text-accent">+</span>
              <span class="text-surface-600"><strong class="text-surface-900">Acceso Prioritario en Beta</strong> - Tus dudas serán priorizadas</span>
            </li>
          </ul>
        </div>

        <!-- Value -->
        <p class="mt-8 text-surface-400">Valor real percibido: <del class="text-accent-beige">más de $300 USD</del></p>


      </div>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ PRICING ═══ -->
    <section class="px-6 py-24 text-center md:py-36">
      <div class="mx-auto max-w-lg">
        <div class="mx-auto mb-10 max-w-2xl">
          <img
            :src="`${base}Pekemind.svg`"
            alt="PEKEMIND app preview"
            class="w-full rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p class="text-sm uppercase tracking-[0.3em] text-surface-400">Hoy puedes acceder por</p>
        <div class="mt-8 font-heading text-[clamp(3.5rem,10vw,8rem)] font-800 leading-none tracking-tighter-2 text-accent-ceruleo">$29.99</div>
        <p class="mt-2 text-sm uppercase tracking-[0.2em] text-accent-ceruleo/70">USD</p>
        <p class="mt-6 text-surface-500">por todo el año<br />(o $3.99 mensual)</p>
        <p class="mx-auto mt-8 max-w-sm text-sm italic text-surface-400">
          Menos de lo que cuesta una salida a comer. Pero con impacto todos los días.
        </p>
      </div>
    </section>

    <!-- ═══ CTA 2 ═══ -->
    <section class="px-6 pb-24 text-center">
      <a
        href="#"
        class="group inline-flex items-center gap-3 rounded-full bg-accent-ceruleo px-10 py-5 font-heading text-sm font-700 uppercase tracking-[0.15em] text-surface-900 transition-all duration-500 hover:bg-accent hover:text-surface-900"
      >
        QUIERO MI ACCESO FUNDADOR AHORA
        <span class="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
      </a>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ GUARANTEE ═══ -->
    <section class="px-6 py-24 text-center md:py-32">
      <div class="mx-auto max-w-2xl">
        <p class="text-xs uppercase tracking-[0.3em] text-accent-beige">Garantía</p>
        <h2 class="mt-6 font-heading text-3xl font-700 tracking-tighter-2 md:text-4xl">
          "Tranquilidad o No Pagas"
        </h2>
        <p class="mt-8 text-lg leading-loose text-surface-500">
          Prueba PEKEMIND durante 30 días. Si no sientes más claridad, más seguridad y menos ansiedad, te devolvemos el 100% de tu dinero. Sin preguntas incómodas. Sin explicaciones largas.
        </p>
      </div>
    </section>

    <!-- ═══ DIVIDER ═══ -->
    <div class="mx-auto h-px w-full max-w-5xl bg-surface-200" />

    <!-- ═══ FAQ ═══ -->
    <section class="px-6 py-24 md:py-36">
      <div class="mx-auto max-w-3xl">
        <h2 class="font-heading text-4xl font-700 tracking-tighter-2 md:text-5xl">
          Preguntas Frecuentes
        </h2>

        <div class="mt-16 divide-y divide-surface-200">
          <div class="group py-8">
            <h3 class="font-heading text-lg font-600 text-surface-600 transition-colors duration-300 group-hover:text-surface-900">¿Y si mi bebé es diferente?</h3>
            <p class="mt-3 text-surface-400">
              La app personaliza según edad y considera prematuridad. No comparamos bebés. Guiamos procesos.
            </p>
          </div>
          <div class="group py-8">
            <h3 class="font-heading text-lg font-600 text-surface-600 transition-colors duration-300 group-hover:text-surface-900">¿Esto reemplaza al pediatra?</h3>
            <p class="mt-3 text-surface-400">
              No. Lo complementa. Te ayuda a saber cuándo todo es normal y cuándo sí deberías consultar.
            </p>
          </div>
          <div class="group py-8">
            <h3 class="font-heading text-lg font-600 text-surface-600 transition-colors duration-300 group-hover:text-surface-900">No tengo tiempo para algo complejo.</h3>
            <p class="mt-3 text-surface-400">
              Perfecto. Está diseñado para 5 minutos al día.
            </p>
          </div>
          <div class="group py-8">
            <h3 class="font-heading text-lg font-600 text-surface-600 transition-colors duration-300 group-hover:text-surface-900">¿Y si me genera más ansiedad?</h3>
            <p class="mt-3 text-surface-400">
              El sistema está diseñado exactamente para lo contrario: primero tranquilizar, luego explicar.
            </p>
          </div>
          <div class="group py-8">
            <h3 class="font-heading text-lg font-600 text-surface-600 transition-colors duration-300 group-hover:text-surface-900">¿Funciona si mi bebé ya tiene más de un año?</h3>
            <p class="mt-3 text-surface-400">
              Sí. Está diseñado para bebés de 0 a 18 meses.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CLOSING ═══ -->
    <section class="relative overflow-hidden px-6 py-32 text-center md:py-44">
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-ceruleo/10 blur-[140px]" />

      <div class="relative mx-auto max-w-4xl">
        <p class="font-heading text-[clamp(2rem,5vw,4.5rem)] font-800 leading-[1.08] tracking-tighter-2">
          Tu bebé no necesita un padre perfecto. Necesita un padre tranquilo.
        </p>
        <div class="mt-14">
          <a
            href="#"
            class="group inline-flex items-center gap-3 rounded-full bg-accent-ceruleo px-10 py-5 font-heading text-sm font-700 uppercase tracking-[0.15em] text-surface-900 transition-all duration-500 hover:bg-accent hover:text-surface-900"
          >
            QUIERO MI ACCESO FUNDADOR AHORA
            <span class="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ FOOTER ═══ -->
    <footer class="border-t border-surface-200 px-6 py-10">
      <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p class="text-xs text-surface-400">© 2025 PEKEMIND. Todos los derechos reservados.</p>
        <p class="text-xs uppercase tracking-[0.2em] text-accent-beige">Tranquilidad para padres</p>
      </div>
    </footer>
  </div>
</template>

<style>
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
