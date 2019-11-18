package br.iesb.ads023.atividade16

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class EventActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_event)
    }

    val botao = findViewById(R.id.button) as Button
    val campo = findViewById(R.id.editText) as EditText

    botao.setOnClickListener {
        val toast = Toast.makeText(this, "onClick disparado...", Toast.LENGHT_SHORT)
        toast.show()
        return@setOnLongClickListener true
    }

    botao.setOnTouchListener {
        val toast = Toast.makeText(this, "onTouch disparado...", Toast.LENGHT_SHORT)
        toast.show()
        return@setOnTouchListener true
    }


    campo.setOnFocusChangeListener {
        val toast = Toast.makeText(this, "onFocusChange disparado...", Toast.LENGHT_SHORT)
        toast.show()
    }

    campo.setOnKeyListener {  v, keyCode, event ->
        if (keyCode == KeyEvent.KEYCODE_ENTER) {
            val toast = Toast.makeText(getApplicationContext(), "onKey disparado...", Toast.LENGHT_SHORT)
            toast.show()
            botao.requestFocus()
            return@setOnKeyListener true
        }
        return@setOnKeyListener false
    }
}
